from langchain_core.tools import tool


@tool
def summary(text: str) -> str:
    """
    Summarize an interaction.
    """
    return f"Summary:\n{text}"