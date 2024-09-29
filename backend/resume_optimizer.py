import os
from transformers import AutoTokenizer, AutoModelForCausalLM
from huggingface_hub import login

def load_env():
    with open('.env') as f:
        for line in f:
            # Ignore empty lines and comments
            if line.strip() and not line.startswith('#'):
                # Split the key and value
                key, value = line.strip().split('=', 1)
                os.environ[key] = value

# Call this function to load the variables
load_env()

# Now you can use the environment variables
HUGGINGFACE_API_KEY = os.getenv('HUGGINGFACE_API_KEY')

# Log in using your Hugging Face token
login(token=HUGGINGFACE_API_KEY)

# Load the model and tokenizer after logging in
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.2-1B")

# Check if the tokenizer has a pad token. If not, assign the eos_token_id as pad_token.
if tokenizer.pad_token is None:
    tokenizer.add_special_tokens({'pad_token': '[PAD]'})  # Add new pad token if none exists

# Load the model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.2-1B")

# Example query
query = "What is the capital of France?"

# Tokenize the input and set attention_mask, with padding
inputs = tokenizer(query, return_tensors="pt", padding=True)

# Generate output from the model, using attention mask and pad token
output = model.generate(
    inputs["input_ids"],
    attention_mask=inputs["attention_mask"],  # Explicitly pass attention mask
    max_length=50,
    pad_token_id=tokenizer.pad_token_id  # Use the pad token ID explicitly
)

# Decode the output into text
output_text = tokenizer.decode(output[0], skip_special_tokens=True)

# Print the result
print(output_text)
