// Si alguien entra por el subdominio por defecto de Mintlify (chateea.mintlify.app),
// lo llevamos a la misma página en el dominio oficial, para que Google indexe solo help.chateea.com.
// Solo el host exacto: las vistas previas del editor (otros *.mintlify.app) siguen funcionando.
(function () {
  if (location.hostname !== 'chateea.mintlify.app') return;
  location.replace('https://help.chateea.com' + location.pathname + location.search + location.hash);
})();
