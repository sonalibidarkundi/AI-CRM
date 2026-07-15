from langchain_core.tools import tool


@tool
def edit_interaction(old_text: str, new_text: str) -> str:
    """
    Edit an existing interaction.
    """
    return f"""Interaction Updated

Old:
{old_text}

New:
{new_text}
"""