/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { KBarProvider, KBarPortal, useMatches, KBarResults } from "kbar";
import { AiOutlineCopy, AiOutlineMail } from "react-icons/ai";
import {
  Box,
  Animator,
  GroupName,
  Positioner,
  Search,
  getResultStyle,
  Action,
  ActionRow,
  Kbd,
  Shortcut,
} from "./styles";

const ResultItem = React.forwardRef<any>(({ action, active }: any, ref) => {
  return (
    <Box ref={ref} css={getResultStyle(active)}>
      <Action>
        {action.icon && action.icon}
        <ActionRow>
          <span>{action.name}</span>
        </ActionRow>
      </Action>
      {action.shortcut?.length ? (
        <Shortcut aria-hidden>
          {action.shortcut.map((shortcut: any) => (
            <Kbd key={shortcut}>{shortcut}</Kbd>
          ))}
        </Shortcut>
      ) : null}
    </Box>
  );
});

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem
            // @ts-ignore
            action={item}
            active={active}
          />
        )
      }
    />
  );
}

export default function CommandBar({ children }: { children: ReactNode }) {
  const actions = [
    {
      id: "copy",
      name: "Copiar URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "Geral",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <AiOutlineCopy />,
    },
    {
      id: "email",
      name: "Enviar Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "Geral",
      perform: () => window.open("mailto:moisesnetored@gmail.com", "_blank"),
      icon: <AiOutlineMail />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search placeholder="Digite um comando ou pesquise…" />
            <RenderResults />
          </Animator>
        </Positioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}
