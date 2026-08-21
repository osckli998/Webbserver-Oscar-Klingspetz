module.exports = [
  {
    files: ["**/*.js", "*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        express: "readonly",
      },
    },
    rules: {
      // ==========================================
      // STAGE 1: BASIC (Alltid aktiverade)
      "no-undef": "error", // Röd linje om man stavar fel på variabler/funktioner (t.ex. consoll.log)
      "no-const-assign": "error", // Röd linje om man försöker skriva över en const (t.ex. x = 3)

      // ==========================================
      // STAGE 2: STÄDNING OCH ORDNING (Gul varning)
      "no-unused-vars": "warn", // Gul linje om man skapar en variabel men glömmer att använda den
      "no-var": "error", // enbart använda moderna "let" och "const".
      "no-empty": "warn", // Sätter röd linje om de glömt att skriva kod inuti en if-sats eller en funktion.
      curly: "error", // Kräver måsvingar även för enraders if-satser så att du inte råkar skriva kod som körs utanför if-satsen.
      "no-redeclare": "error", // Förbjud att man deklarerar samma variabelnamn två gånger i samma block
      eqeqeq: "warn", // Tvinga strikt användning av === istället för ==
    },
  },
];
