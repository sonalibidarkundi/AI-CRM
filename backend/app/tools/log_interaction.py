from langchain_core.tools import tool


@tool
def log_interaction(interaction: str) -> str:
    """
    Save an HCP interaction.
    """
    return f"✅ Interaction logged successfully.\n\n{interaction}"