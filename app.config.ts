export default defineAppConfig({
  ui: {
    primary: "mine-shaft",
    gray: "cool",
    button: {
      rounded: "rounded-none",
      default: {
        size: "sm",
      },
    },
    input: {
      default: {
        size: "sm",
      },
    },
    card: {
      rounded: "rounded-none",
    },
    footer: {
      top: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
        container: "py-8 lg:py-16",
      },
      bottom: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
    page: {
      hero: {
        wrapper: "lg:py-24",
      },
    },
  },
});
