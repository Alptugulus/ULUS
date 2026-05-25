/** İlk paint öncesi tema sınıfı — FOUC önleme */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("ulus-theme");document.documentElement.classList.add(t==="light"?"light":"dark");document.documentElement.style.colorScheme=t==="light"?"light":"dark";}catch(e){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
