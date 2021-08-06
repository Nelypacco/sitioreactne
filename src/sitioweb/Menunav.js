import React from 'react'

export const Menunav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">Navbar</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
				<ul class="navbar-nav">
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Catalogo
					</a>
					<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
					  <li><a class="dropdown-item" href="#">Ofertas</a></li>
					  <li><a class="dropdown-item" href="#">Productos</a></li>
					  <li><a class="dropdown-item" href="#">Nuevo</a></li>
					</ul>
				  </li>
				</ul>
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
					  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Acerca de
					  </a>
					  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
						<li><a class="dropdown-item" href="#">Blog</a></li>
						<li><a class="dropdown-item" href="#">Redes sociales</a></li>
						<li><a class="dropdown-item" href="#">Contactanos</a></li>
					  </ul>
					</li>
				  </ul>
			  </div>
			</div>
		  </nav>
        </div>
    )
}
