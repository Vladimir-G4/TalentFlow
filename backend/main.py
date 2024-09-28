import requests

PROXYCURL_API_KEY = 'VzO5yX_tDuCP7eMpXs8nLQ'


def get_profile(profile_id):
    api_endpoint = 'https://nubela.co/proxycurl/api/v2/linkedin'
    header_dic = {'Authorization': 'Bearer ' + PROXYCURL_API_KEY}
    params = {
        'url': f'https://www.linkedin.com/in/{profile_id}',
    }
    response = requests.get(api_endpoint,
                            params=params,
                            headers=header_dic)
    return response.json()


get_profile("vladimir-gutierrez")