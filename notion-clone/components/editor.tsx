"use client";
import React from "react";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useTheme } from "next-themes";

interface Props {
  onChange: (value: string) => void;
  initialConten?: string;
  editable?: boolean;
}

export const Editor = ({ onChange, initialConten, editable }: Props) => {
  const { theme } = useTheme();
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialConten
      ? (JSON.parse(initialConten) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });
  return (
    <div>
      <BlockNoteView
        theme={theme === "dark" ? "dark" : "light"}
        editor={editor}
      />
    </div>
  );
};
