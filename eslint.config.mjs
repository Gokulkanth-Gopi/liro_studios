import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "plugin:jsx-a11y/recommended"],
  }),
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // Prevent undefined comparison issues (S7741)
      "eqeqeq": ["warn", "always"],
      
      // Accessibility rules (S6819, S6847, S1082)
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      
      // Code quality
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "prefer-const": "warn",
      "no-var": "warn",
      
      // React specific
      "react/jsx-no-target-blank": "warn",
      "react/no-array-index-key": "warn",
      "react-hooks/rules-of-hooks": "error", // Keep this as error as it breaks React
      "react-hooks/exhaustive-deps": "warn",
      
      // Prevent nested functions (S2004)
      "max-nested-callbacks": ["warn", 3],
      
      // General best practices
      "no-duplicate-imports": "warn",
      "no-unreachable": "warn",
      "no-unused-expressions": "warn"
    }
  }
];

export default eslintConfig;
