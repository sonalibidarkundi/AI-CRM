from langchain_core.tools import tool


@tool
def search_hcp(name: str) -> str:
    """
    Search an HCP.
    """
    return f"HCP Found: {name}"