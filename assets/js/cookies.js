
let cookies = () => {
    //======================================================================
    // COOKIES
    //======================================================================
  
    //-----------------------------------------------------
    // Configuración
    //-----------------------------------------------------
    const urlsScriptsCookies = ['https://analytics.google.com'];
  
    function contenidoScriptsCookies() {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P0NY380E7P';
        document.head.appendChild(script);
      
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-P0NY380E7P');
      }
  
  
    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    const seccionCookie = document.querySelector('.cookies');
    const cookieSi = document.querySelector('.cookies__boton--si');
    const cookieNo = document.querySelector('.cookies__boton--no');
    const nuevosScripts = document.querySelector('#nuevosScripts');
  
    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------
  
    /**
      * Método que oculta la sección de Cookie para siempre
      */
    function ocultarCookie() {
        // Borra la sección de cookies en el HTML
        seccionCookie.remove();
    }
  
    /**
      * Método que marca las cookies como aceptadas
      */
    function aceptarCookies() {
        // Oculta el HTML de cookies
        ocultarCookie();
        // Guarda que ha aceptado
        localStorage.setItem('cookie', true);
        // Tu codigo a ejecutar si aceptan las cookies
        ejecutarSiAcepta();
    }
  
    /**
      * Método que marca las cookies como denegadas
      */
    function denegarCookies() {
        // Oculta el HTML de cookies
        ocultarCookie();
        // Guarda que ha aceptado
        localStorage.setItem('cookie', false);
    }
  
    /**
      * Método que ejecuta tu código si aceptan las cookies
      */
    function ejecutarSiAcepta() {
        // Crea los <script>
        urlsScriptsCookies.forEach((url) => {
            const nuevoScript = document.createElement('script');
            nuevoScript.setAttribute('src', url);
            nuevosScripts.appendChild(nuevoScript);
        });
        // Lanza los códigos
        contenidoScriptsCookies();
    }
  
    /**
      * Método que inicia la lógica
      */
    function iniciar() {
        // Comprueba si en el pasado el usuario ha marcado una opción
        if (localStorage.getItem('cookie') !== null) {
            if(localStorage.getItem('cookie') === 'true') {
                // Aceptó
                aceptarCookies();
            } else {
                // No aceptó
                denegarCookies();
            }
        }
    }
  
    //-----------------------------------------------------
    // Eventos
    //-----------------------------------------------------
    cookieSi.addEventListener('click',aceptarCookies, false);
    cookieNo.addEventListener('click',denegarCookies, false);
  
    return {
        iniciar: iniciar
    }
  }
  
  // Activa el código. Comenta si quieres desactivarlo.
  cookies().iniciar();
  
  
  