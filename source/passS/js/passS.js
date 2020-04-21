function passC(datos,position){

		//variable de contenedor padre 
		let datSH=document.querySelector(datos);
		
		//ocultar los contenedores que exeden su tamaño
		datSH.style.overflow="hidden";

		//guardando ,todas sus secciones de datSH y agregando divs
		let newDatos='<div id="funcionaporfa"><div class="conteSecciones">'+datSH.innerHTML+'</div></div>';


		//insercion de los nuevos datos a datSH
		datSH.innerHTML=newDatos;


		//contiene a las secciones , creada anteriormente por la insercion
		let datosA = datSH.querySelector('.conteSecciones');

		//secciones 
		let secciones = datosA.querySelectorAll('.secciones');

		// guarda la medida de <div class="medidaCom">
		// let vaMa=0;

		let insertH="";
		secciones.forEach(seccion=>{
			let addclassS2=seccion.outerHTML;
			
			insertH+='<div class="anteS">'+addclassS2+'</div>';
		});	
		// console.log(insertH);
		datosA.innerHTML=''+insertH+'';

		let antes=datosA.querySelectorAll('.anteS');
		// if(position==true){
			
		// 	console.log(antes);
		// 	for(let i=0 ; i<secciones.length ; i++){
		// 		antes[i].style.height="100%";
		// 	};
			
		// }

		secciones = datosA.querySelectorAll('.secciones');
		//creacion de nuevo contenedor dentro de las secciones
		// for(let i=0 ; i<secciones.length ; i++){
		// 	let addclassS=secciones[i].innerHTML;
		// 	secciones[i].innerHTML='<div class="medidaCom">'+addclassS+'</div>';

		// }

		

		//botones
		let backs=datosA.querySelectorAll('.back');
		let nexts=datosA.querySelectorAll('.next');


		//agregando estilo si el efecto es horizontal o vertical
		if(position==true){
			datosA.style.flexDirection="column";
			datosA.style.height=""+ secciones.length +"00%";
			// datosA.style.position="absolute";

		}else{
			datosA.style.width=""+ secciones.length +"00%";
			// funcionaporfa.style.display="none";
		}


		//agregando atributos a cada seccion y tambien a los botones
		for(let i=0 ; i<secciones.length ; i++){
			
			secciones[i].setAttribute('conTadorSecci',i);

			let marcarBtns=secciones[i].querySelectorAll('.next');
			let marcarBtns2=secciones[i].querySelectorAll('.back');

			marcarBtns.forEach(marcarBtn=>{
				marcarBtn.setAttribute('ligadoConte',i);
			});
			marcarBtns2.forEach(marcarBtn=>{
				marcarBtn.setAttribute('ligadoConte',i);
			});


			
		}


			//cambio de seccion , al hacer click en boton 
			nexts.forEach(next=>{

				
				next.addEventListener('click',function(){

					let secSigue=parseInt(next.getAttribute('ligadoConte'))+1;
					
					if(position==true){
						datosA.style.top="-"+secSigue+"00%";
					}else{
						datosA.style.right=""+secSigue+"00%";
					}


				});
			});

			//cambio de seccion , al hacer click en boton 
			backs.forEach(back=>{

				 
				back.addEventListener('click',function(){

					let secSigue=parseInt(back.getAttribute('ligadoConte'))-1;

					if(position==true){
						datosA.style.top="-"+secSigue+"00%";
					}else{
						datosA.style.right=""+secSigue+"00%";
					}

				});
			});


			
		// si el tamaño de la ventana del dispositivo se reduce o viceversa 
		// se acturizara el tamaño a lo que ocupa
		
			let vaMa=0;
			let contWidth=0;
			for(let i=0 ; i<secciones.length ; i++){

				if(secciones[i].clientHeight > vaMa){
					vaMa = secciones[i].clientHeight;
				}
				

				antes[i].style.width="auto";
				
				if(antes[i].clientWidth > contWidth){
					contWidth = antes[i].clientWidth;
					// console.log( antes[i].clientWidth);
				}
				

			}
			// console.log(contWidth)
			antes.forEach(ante=>{
				ante.style.width="100%";
			})

			// pone altura o ancho despues de haberse medido
			if(position==true){
				funcionaporfa.style.height=''+vaMa+'px';
			}	
			else{
				funcionaporfa.style.width=''+contWidth+'px';				
			}

			for(let i=0 ; i<secciones.length ; i++){
				secciones[i].style.height="100%";
			}

		window.addEventListener('resize',function(){
			// datSH.style.display="block";
			// for(let i=0 ; i<secciones.length ; i++){
			// 	secciones[i].style.height="auto";
			// }
			// vaMa=0;
			// for(let i=0 ; i<secciones.length ; i++){

			// 	if(secciones[i].offsetHeight > vaMa){
			// 		vaMa = secciones[i].offsetHeight;
			// 	}

			// }
		
			// funcionaporfa.style.height=''+vaMa+'px';
			// for(let i=0 ; i<secciones.length ; i++){
			// 	secciones[i].style.height="100%";
			// }	
			// funcionaporfa.style.height=''+altoTodo+'px';
			
			// dada
			// funcionaporfa.style.width='100%';
			contWidth=0;
			secciones.forEach(ante=>{
				ante.style.width="max-content";
			})
			
			for(let i=0 ; i<secciones.length ; i++){

				// if(secciones[i].clientHeight > vaMa){
				// 	vaMa = secciones[i].clientHeight;
				// }
				

				// antes[i].style.width="auto";
				
				// console.log( antes[i].scrollWidth);
				if(secciones[i].scrollWidth > contWidth){
					
					contWidth = secciones[i].scrollWidth;
					console.log( contWidth);
				}
				console.log( contWidth);

			}
			// console.log(contWidth)
			secciones.forEach(ante=>{
				ante.style.width="100%";
			})

			// pone altura o ancho despues de haberse medido
			if(position==true){
				// funcionaporfa.style.height=''+vaMa+'px';
			}	
			else{
				funcionaporfa.style.width=''+contWidth+'px';				
			}

			for(let i=0 ; i<secciones.length ; i++){
				secciones[i].style.height="100%";
			}
			anchoTodo=datSH.clientWidth;
			anchoUsado=funcionaporfa.clientWidth;
			if(anchoTodo>anchoUsado){
				funcionaporfa.style.width=''+anchoTodo+'px';
			}else if(anchoTodo<contWidth){
				funcionaporfa.style.width='100%';
			}
			// datSH.style.display="inline-block";
		});


		// datSH.style.width="100%";
		let anchoTodo=datSH.clientWidth;
		let anchoUsado=funcionaporfa.clientWidth;
		let altoTodo=datSH.clientHeight;
		let altoUsado=funcionaporfa.clientHeight;
		// setTimeout(function(){
			
		// },800);
		// funcionaporfa.style.height=''+altoTodo+'px';
		if(anchoTodo>anchoUsado){
			funcionaporfa.style.width=''+anchoTodo+'px';
		}else if(anchoTodo<contWidth){
			funcionaporfa.style.width='100%';
		}
		// else if(anchoTodo==contWidth){

		// }
		// loultimo(datos);
		


		var target = document.querySelector('#ididid');

		const ro=new ResizeObserver(entries =>{
			console.log('eee');
			anchoTodo=datSH.clientWidth;
			anchoUsado=funcionaporfa.clientWidth;
			altoTodo=datSH.clientHeight;
				
				// funcionaporfa.style.width=''+anchoTodo+'px';
				// funcionaporfa.style.height=''+altoTodo+'px';
			// entries.forEach(entrie=>{
			// 	sss.innerHTML=`${entrie.contentRect.width} x ${entrie.contentRect.height}`
				
			// });
		});

		ro.observe(datSH);
		
		
		// for(let i=0 ; i<secciones.length ; i++){
		// 	console.log(secciones[i].outerHTML);
		
		// }	
		//agregado de estilos
		// document.write(`<style>
				// .groupSecc{
				// 	height:100%;
				// 	position:relative;
				// }
				// .conteSecciones{
				// 	position: relative;
				// 	width: 100%;
				// 	height: 100%;
				// 	display: flex;
				// 	transition:0.8s;
				// 	right: 0;
				// 	top: 0;
				// }
				// .secciones{
				// 	height: 100%;
				// 	width: 100%;
				// 	transition: 0.5s;
				// }
				// #funcionaporfa{
				// 	height:1px;
				// }

		// 		</style>`);
		
		
}
// var target = document.querySelector('#ididid');

// const ro=new ResizeObserver(entries =>{
// 	entries.forEach(entrie=>{
// 		target.innerHTML=`${entrie.contentRect.width} x ${entrie.contentRect.height}`
// 		if(entrie.contentRect.width){
// 			if(anchoTodo>anchoUsado){
// 				funcionaporfa.style.width=''+anchoTodo+'px';
// 				console.log('todo');
// 			}else if(anchoTodo<anchoUsado){
// 				funcionaporfa.style.width=''+anchoTodo+'px';
// 				console.log('uso')
// 			}
// 		}
// 	});
// });

// ro.observe(target);


function loultimo(datacos){
	let datSH=document.querySelector(datacos);
	let anchoTodo=datSH.clientWidth;
		console.log(anchoTodo)
		let anchoUsado=funcionaporfa.clientWidth;
		
		// setTimeout(function(){
			
		// },800);
		// if(anchoTodo>anchoUsado){
		// 	funcionaporfa.style.width=''+anchoTodo+'px';
		// }
		
		
}
