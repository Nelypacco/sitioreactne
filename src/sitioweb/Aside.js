import React from 'react'

const Aside = () => {
    return (
        <div>
            ¡Hola a todos!
Innovaciones que crea.
Acceso a su propio mundo.
Imposibilidad tu cambias.
¡Se inteligente!
No olvide llevarlo antes de salir de casa.
Tu compañero de oficina.
     
			<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  			<div class="offcanvas-header">
    		<h5 id="offcanvasRightLabel">Offcanvas right</h5>
    		<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  			</div>
  			<div class="offcanvas-body">
              <iframe width="400" height="400" src="https://www.youtube.com/embed/qgm4RaVUMfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  			</div>
			</div>
            
        </div>
    )
}

export default Aside

