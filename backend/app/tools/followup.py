from langchain_core.tools import tool


@tool
def followup(name: str) -> str:
    """
    Recommend a follow-up.
    """
    return f"Recommended follow-up for Dr. {name} after 7 days."