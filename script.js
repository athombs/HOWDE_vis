let currentSimulation="cyl";

const variables={

cyl:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
{label:"Density Logarithm",file:"logdensity"}
],

ffstep:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
{label:"Density Logarithm",file:"logdensity"}
],

foil3d:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"W Velocity",file:"w"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
{label:"Density Logarithm",file:"logdensity"}
],

foil:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
],

riemannC3:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
{label:"Density Logarithm",file:"logdensity"}
],

riemannC6:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
{label:"Density Logarithm",file:"logdensity"}
],

kh2d:[
{label:"Mach",file:"mach"},
{label:"N2 Mass Fraction",file:"n2"},
{label:"O2 Mass Fraction",file:"o2"},
{label:"NO Mass Fraction",file:"no"},
{label:"N Mass Fraction",file:"n"},
{label:"O Mass Fraction",file:"o"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Vibrational Temperature",file:"vibtemp"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"}
],

kh3d:[
{label:"Mach",file:"mach"},
{label:"N2 Mass Fraction",file:"n2"},
{label:"O2 Mass Fraction",file:"o2"},
{label:"NO Mass Fraction",file:"no"},
{label:"N Mass Fraction",file:"n"},
{label:"O Mass Fraction",file:"o"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"W Velocity",file:"w"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Vibrational Temperature",file:"vibtemp"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"}
],

rt:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"}
],

triple:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
{label:"Density Logarithm",file:"logdensity"}
],

blast:[
{label:"Mach",file:"mach"},
{label:"U Velocity",file:"u"},
{label:"V Velocity",file:"v"},
{label:"Density",file:"density"},
{label:"Pressure",file:"pressure"},
{label:"Temperature",file:"temperature"},
{label:"Schlieren",file:"schlieren"},
{label:"Vorticity",file:"vorticity"},
],

flarecone:[
{label:"Mach",file:"mach"},
{label:"Pressure",file:"pressure"},
{label:"Schlieren",file:"schlieren"},
{label:"Heat Flux",file:"heatflux"},
],

};



const docs={

cyl:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Mach 3 channel flow past an inviscid cylinder. Initially, a bow shock forms on the cylinder before reflecting off the channel walls.
		A separation zone forms aft of the cylinder, delineated by recompression shocks.
		The reflected shocks interact with the vortex street, and Mach stems eventually form in the separation region and on the channel walls.
		The channel wall Mach stems produce Kelvin-Helmholtz instabilities, and the central Mach stem accentuates the vortex shedding.
		As the central Mach stem propagates upstream, it destabilizes and widens the separation region considerably.
		The separation region oscillates aggressively, forming small transient mixing layers and Mach stems.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Multiblock: 5 blocks<br>
		Grid Size: 210,000 cells
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 5th-Order Componentwise WENO (with 1st-Order Initialization)<br>
		Flux: Harten-Lax-van Leer (HLL)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.6
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Boundary: Supersonic Inlet (Mach 3, 300 K, 1 atm)<br>
		Right Boundary: Supersonic Outlet<br>
		Upper Boundary: Inviscid Wall<br>
		Lower Boundary: Inviscid Wall<br>
		Cylinder Boundary: Inviscid Wall
	</div>
`,

ffstep:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Supersonic flow over a forward-facing step producing a strong bow shock and multiple reflections which eventually form a Mach stem.
		The numerical dissipation of the scheme is sufficiently low such that Kelvin-Helmholtz instabilities form in the shear layer.
		A small non-physical boundary layer forms aft of the step which is a result of entropy violation at the singular step corner.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Multiblock: 3 blocks<br>
		Grid Size: 126,000 Cells
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 5th-Order Componentwise WENO (with 1st-Order Initialization)<br>
		Flux: Harten-Lax-van Leer (HLL)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.6
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Boundary: Supersonic Inlet (Mach 3)<br>
		Right Boundary: Supersonic Outlet<br>
		Upper Boundary: Inviscid Wall<br>
		Lower Boundary: Inviscid Wall
	</div>
`,

foil:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Transonic flow over the OAT15a supercritical airfoil. Free stream Mach and angle of attack are 0.73 and 7.0 degrees, respectively.
		This is a canonical case for buffet analysis. The flow becomes supersonic near the leading edge and forms a standing normal shock at approximately 65% chord.
		The shock-boundary layer interaction causes flow separation aft of the shock, which sheds vortices at the trailing edge and produces acoustic waves.
		A leading shock is sporadically formed near the normal shock. 
		This oblique shock (Mach wave) has a wave angle of roughly 40 degrees and is formed by the deflection of the flow around a separated boundary layer.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Multiblock: 5 blocks<br>
		Grid Size: 112,000 Cells
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: 2nd-Order Central<br>
		Inviscid Discretization: 7th-Order Componentwise WENO<br>
		Flux: Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.9
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Navier-Stokes<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Boundary: Subsonic Inlet (25 chords upstream, 300K, 1atm)<br>
		Right Boundary: Subsonic Outlet (20 chords downstream)<br>
		Airfoil Boundary: Isothermal Viscous Wall (300K)
	</div>
`,

foil3d:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Transonic flow over the OAT15a supercritical airfoil. Free stream Mach and angle of attack are 0.73 and 7.0 degrees, respectively.
		This is a canonical case for buffet analysis. The flow becomes supersonic near the leading edge and forms a standing normal shock at approximately 65% chord.
		The shock-boundary layer interaction causes flow separation aft of the shock, which produces developed 3D turbulence.
		The turbulent flow sheds vortices at the trailing edge and produces acoustic waves.
		The acoustic waves interact with the primary shock, causing it to traverse a segment of the airfoil.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Multiblock: 5 blocks<br>
		Grid Size: 13,000,000 Cells
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: 2nd-Order Central<br>
		Inviscid Discretization: 7th-Order Componentwise WENO<br>
		Flux: Ducros-Limited Harten-Lax-van Leer Contact (DL-HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 1.5
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Navier-Stokes<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Boundary: Subsonic Inlet (25 chords upstream, 300K, 1atm)<br>
		Right Boundary: Subsonic Outlet (20 chords downstream)<br>
		Airfoil Boundary: Isothermal Viscous Wall (300K)
	</div>
`,

kh2d:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Development of a 2D mixing layer from an inlet with piecewise-constant flow.
		Large Kelvin-Helmholtz billows can be seen propagating downstream.
		The inverse energy cascade characteristic of 2D "turbulence" is observed, where eddies grow in size rather than dissipating.
		The case has a supersonic upper layer, and Mach wave radiation can be observed emanating from the mixing layer.
		Below the mixing layer, acoustic waves propagate.
		The flow is also chemically reacting, introducing additional modeling complexity.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Grid Size: 500,000 Cells
	</div>
	<button class="accordion">Numerical Method</button>
	<div class="panel">
		Viscous Discretization: 6th-Order Central<br>
		Inviscid Discretization: 7th-Order Componentwise WENO<br>
		Flux: Ducros-Limited Harten-Lax-van Leer Contact (DL-HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.8
	</div>
	<button class="accordion">Physics Model</button>
	<div class="panel">
		Equation Set: Compressible Multispecies Navier-Stokes<br>
		Gas Model: Five-Species Park (N2, O2, NO, N, O)<br>
		Thermal Model: Park Two-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Boundary: Reference Inlet (Two States)<br>
		Right Boundary: Supersonic Outlet <br>
		Upper Boundary: Supersonic Outlet <br>
		Lower Boundary: Supersonic Outlet <br>
	</div>
`,

kh3d:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Development of a 3D mixing layer from an inlet with piecewise-constant flow.
		Kelvin-Helmholtz waves can be seen propagating downstream before devolving into fully developed turbulence.
		The energy cascade is observed, where large eddies provide energy to smaller eddies all the way to the dissipative scale.
		The case has a supersonic upper layer, and Mach wave radiation can be observed emanating from the mixing layer.
		Below the mixing layer, acoustic waves propagate.
		The flow is also chemically reacting, introducing additional modeling complexity.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Grid Size: 125,000,000 Cells
	</div>
	<button class="accordion">Numerical Method</button>
	<div class="panel">
		Viscous Discretization: 6th-Order Central<br>
		Inviscid Discretization: 7th-Order Componentwise WENO<br>
		Flux: Ducros-Limited Harten-Lax-van Leer Contact (DL-HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.8
	</div>
	<button class="accordion">Physics Model</button>
	<div class="panel">
		Equation Set: Compressible Multispecies Navier-Stokes<br>
		Gas Model: Five-Species Park (N2, O2, NO, N, O)<br>
		Thermal Model: Park Two-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Boundary: Reference Inlet (Two States)<br>
		Right Boundary: Supersonic Outlet <br>
		Upper Boundary: Supersonic Outlet <br>
		Lower Boundary: Supersonic Outlet <br>
		Side Boundaries: Periodic <br>
	</div>
`,

rt:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Two-dimensional Rayleigh-Taylor instability.
	</div>
		<button class="accordion">Grid</button>
		<div class="panel">
		Single Block<br>
		Block 1: 200 x 800<br>
		Grid Size: 160000
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 5th-Order Componentwise WENO<br>
		Flux: Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.5
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		Left Boundary: Supersonic Outlet<br>
		Right Boundary: Supersonic Outlet<br>
		Upper Boundary: Supersonic Outlet<br>
		Lower Boundary: Supersonic Outlet
	</div>
`,

riemannC3:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Two-dimensional Riemann problem: Configuration 3.
		This configuration includes four shock waves which form slip lines,
		recirculation zones, and shock-vortex interactions
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Block 1: 1000 x 1000<br>
		Grid Size: 1000000
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 9th-Order Componentwise WENO<br>
		Flux: Ducros-Limited Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.6
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		Left Boundary: Supersonic Outlet<br>
		Right Boundary: Supersonic Outlet<br>
		Upper Boundary: Supersonic Outlet<br>
		Lower Boundary: Supersonic Outlet
	</div>
`,

riemannC6:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Two-dimensional Riemann problem: Configuration 6.
		This configuration includes four contact discontinuities which form 
		Kelvin-Helmholtz instabilities around a central vortex.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Block 1: 1000 x 1000<br>
		Grid Size: 1000000
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 9th-Order Componentwise WENO<br>
		Flux: Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.6
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		NE Quadrant: 0.75 m/s, -0.5 m/s, 1 Pa, 1 K <br>
		Left Boundary: Supersonic Outlet<br>
		Right Boundary: Supersonic Outlet<br>
		Upper Boundary: Supersonic Outlet<br>
		Lower Boundary: Supersonic Outlet
	</div>
`,

triple:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Triple point shock interaction, where a shock wave travels through 
		two layers of fluid separated by a slip line. Baroclinic torque generation 
		across the slip line produces Kelvin-Helmhotz instabilities.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Block 1: 2000 x 1000<br>
		Grid Size: 2000000
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 9th-Order Componentwise WENO<br>
		Flux: Ducros-Limited Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.6
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Left Domain: 0.00 m/s, 0.00 m/s, 1 Pa, 1 K <br>
		Upper Domain: 0.00 m/s, 0.00 m/s, 0.10 Pa, 0.80 K <br>
		Upper Domain: 0.00 m/s, 0.00 m/s, 0.10 Pa, 0.10 K <br>
		Boundaries: Inviscid Wall
	</div>
`,

blast:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Energy is deposited at the flow as three impulse sources
		with a given radius and energy density. The interactions
		between these blast waves produce Richtmyer-Meshkov instabilities. 
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Block 1: 1000 x 1000<br>
		Grid Size: 1000000
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: None (Inviscid)<br>
		Inviscid Discretization: 9th-Order Componentwise WENO<br>
		Flux: Ducros-Limited Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.9
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Boundaries: Supersonic Outlet
	</div>
`,

flarecone:`
	<button class="accordion">Case Description</button>
	<div class="panel">
		Large eddy simulation of a flared cone. Free stream pressure fluctuations
		at 10% of the free stream value introduce instability in the flow. Acoustic waves 
		trapped in the boundary layer generate second-mode instability that eventually 
		amplifies into transitional flow and turbulence.
	</div>
	<button class="accordion">Grid</button>
	<div class="panel">
		Single Block<br>
		Block 1: 2000 x 250 x 120<br>
		Grid Size: 60000000
	</div>
	<button class="accordion">Numerical Methods</button>
	<div class="panel">
		Viscous Discretization: 6th-Order Central (Inviscid)<br>
		Inviscid Discretization: 9th-Order Componentwise WENO<br>
		Flux: Harten-Lax-van Leer Contact (HLLC)<br>
		Time Integration: Explicit TVD RK2<br>
		CFL: 0.9
	</div>
	<button class="accordion">Physics Models</button>
	<div class="panel">
		Equation Set: Compressible Euler<br>
		Gas Model: Single-Species Perfect<br>
		Thermal Model: Single-Temperature
	</div>
	<button class="accordion">Boundary Conditions</button>
	<div class="panel">
		Inflow Boundary: Supersonic Inlet<br>
		Outflow Boundary: Supersonic Outlet<br>
		Lower Boundary: Isothermal Viscous Wall<br>
		Side Boundaries: Inviscid Wall
	</div>
`,
};

function openPage(page){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(page).classList.add("active");

}



function loadSimulation(sim){

currentSimulation=sim;
let title = "";
if (sim === "cyl") title = "Cylinder in Channel (2D)";
else if (sim === "ffstep") title = "Forward Facing Step (2D)";
else if (sim === "foil") title = "OAT15a Supercritical Airfoil (2D)";
else if (sim === "kh2d") title = "Kelvin–Helmholtz Instability (2D)";
else if (sim === "kh3d") title = "Kelvin–Helmholtz Instability (3D)";
else if (sim === "rt") title = "Rayleigh-Taylor Instability (2D)";
else if (sim === "riemannC3") title = "Riemann Problem: Configuration 3 (2D)";
else if (sim === "riemannC6") title = "Riemann Problem: Configuration 6 (2D)";
else if (sim === "triple") title = "Triple-Point Shock Interaction (2D)";
else if (sim === "flarecone") title = "Transition to Turbulence on Flared Cone (3D)";

    document.getElementById("simTitle").textContent = title;

populateVariables();
updateVideo();

document.getElementById("simDocs").innerHTML=docs[sim];

initAccordion();

}



function populateVariables(){

const select=document.getElementById("variableSelect");

select.innerHTML="";

variables[currentSimulation].forEach(v=>{

const option=document.createElement("option");

option.value=v.file;
option.textContent=v.label;

select.appendChild(option);

});

}



document.getElementById("variableSelect")
.addEventListener("change",updateVideo);



function updateVideo(){

const viewer=document.getElementById("viewer");

const variable=document.getElementById("variableSelect").value;

viewer.src=`videos/${currentSimulation}_${variable}.mp4`;

viewer.load();

}



function initAccordion(){

const acc=document.querySelectorAll(".accordion");

acc.forEach(a=>{

a.addEventListener("click",function(){

this.classList.toggle("active");

let panel=this.nextElementSibling;

panel.style.display=
panel.style.display==="block"?
"none":"block";

});

});

}



populateVariables();
updateVideo();
loadSimulation("ffstep");