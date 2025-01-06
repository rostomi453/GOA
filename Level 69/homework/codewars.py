import re

def domain_name(url):
    # Use regex to parse the domain name
    match = re.search(r"(?:https?://)?(?:www\.)?([^/\.]+)", url)
    if match:
        return match.group(1)
    return None
