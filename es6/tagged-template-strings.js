console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(template, ...substitutions) {
  const result = substitutions.reduce((output, substitution, currentIndex) => {
    return output + escape(substitution) + template[currentIndex + 1];
  }, template[0]);

  return result;
}

function escape(string) {
  return string.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/'/g, "&apos;")
               .replace(/"/g, "&quot;");
}
