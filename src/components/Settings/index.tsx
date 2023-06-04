import * as Menu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { FiSettings, FiCheck } from "react-icons/fi";

export const SettingsMenu = () => {
  const styles = {
    trigger: {
      width: "40px",
      backgroundColor: "white",
      cursor: "pointer",
    },
    portal: {
      backgroundColor: "white",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
      padding: "1rem",
      borderRadius: "8px",
      width: "150px",
    },
    label: {
      display: "block",
      width: "fit-content",
      margin: "0 auto",
      fontSize: "11px",
      lineHeight: 2,
      color: "var(--green-700)",
    },
    item: {
      fontSize: "12.6px",
      lineHeight: 1.5,
      color: "var(--gray-800)",
      cursor: "pointer",
      paddingLeft: '1.3rem'
    },
    indicator: {
      position: 'absolute',
      color: 'var(--green-600)'
    },
    separator: {
      height: "1px",
      width: "100%",
      backgroundColor: "var(--gray-300)",
      margin: ".5rem 0",
    },
  };

  const [theme, setTheme] = useState<string>("light");
  const [language, setLanguage] = useState<string>("Português");

  return (
    <>
      <Menu.Root>
        <Menu.Trigger style={styles.trigger}>
          <FiSettings size={18} className=".menu"/>
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Content style={styles.portal}>
            <Menu.Label style={styles.label}>idioma</Menu.Label>
            <Menu.RadioGroup value={language} onValueChange={setLanguage}>
              <Menu.RadioItem value="potuguese">
                <Menu.ItemIndicator style={styles.indicator}>
                  <FiCheck />
                </Menu.ItemIndicator>
                <span style={styles.item}>Português</span>
              </Menu.RadioItem>
              <Menu.RadioItem value="english">
                <Menu.ItemIndicator style={styles.indicator}>
                  <FiCheck />
                </Menu.ItemIndicator>
                <span style={styles.item}>English</span>
              </Menu.RadioItem>
            </Menu.RadioGroup>

            <Menu.Separator style={styles.separator} />

            <Menu.Label style={styles.label}>Tema</Menu.Label>
            <Menu.RadioGroup value={theme} onValueChange={setTheme}>
              <Menu.RadioItem value="light">
                <Menu.ItemIndicator style={styles.indicator}>
                  <FiCheck />
                </Menu.ItemIndicator>
                <span style={styles.item}>Claro</span>
              </Menu.RadioItem>
              <Menu.RadioItem value="dark">
                <Menu.ItemIndicator style={styles.indicator}>
                  <FiCheck />
                </Menu.ItemIndicator>
                <span style={styles.item}>Escuro</span>
              </Menu.RadioItem>
            </Menu.RadioGroup>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>

      <style jsx>{`

        .menu:hover {
          background: var(--green-100); 
        }

      `}</style>
    </>
  );
};
