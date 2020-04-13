function passC(datos,position){

		//variable de contenedor padre 
		let datSH=document.querySelector(datos);
		
		//ocultar los contenedores que exeden su tamaño
		datSH.style.overflow="hidden";

		//guardando ,todas sus secciones de datSH y agregando divs
		let newDatos='<div id="funcionaporfa"></div><div class="conteSecciones">'+datSH.innerHTML+'</div>';


		//insercion de los nuevos datos a datSH
		datSH.innerHTML=newDatos;


		//contiene a las secciones , creada anteriormente por la insercion
		let datosA = datSH.querySelector('.conteSecciones');

		//secciones 
		let secciones = datosA.querySelectorAll('.secciones');

		//guarda la medida de <div class="medidaCom">
		let vaMa=0;

		//creacion de nuevo contenedor dentro de las secciones
		for(let i=0 ; i<secciones.length ; i++){
			let addclassS=secciones[i].innerHTML;
			secciones[i].innerHTML='<div class="medidaCom">'+addclassS+'</div>';


			if(secciones[i].querySelector('.medidaCom').clientHeight > vaMa){
				vaMa = secciones[i].querySelector('.medidaCom').clientHeight;
			}
		}
		funcionaporfa.style.height=''+vaMa+'px';	



		//botones
		let backs=datosA.querySelectorAll('.back');
		let nexts=datosA.querySelectorAll('.next');


		//agregando estilo si el efecto es horizontal o vertical
		if(position==true){
			datosA.style.flexDirection="column";
			datosA.style.height=""+ secciones.length +"00%";
			datosA.style.position="absolute";

		}else{
			datosA.style.width=""+ secciones.length +"00%";
			funcionaporfa.style.display="none";
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
			})

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



		//si el tamaño de la ventana del dispositivo se reduce o viceversa 
		//se acturizara el tamaño a lo que ocupa
		window.addEventListener('resize',function(){
			vaMa=0;
			for(let i=0 ; i<secciones.length ; i++){

				if(secciones[i].querySelector('.medidaCom').clientHeight > vaMa){
					vaMa = secciones[i].querySelector('.medidaCom').clientHeight;
				}

			}
		});
		window.addEventListener('resize',function(){
			funcionaporfa.style.height=''+vaMa+'px';	
		});
		

		//agregado de estilos
		document.write(`<style>
				.groupSecc{
					height:100%;
					position:relative;
				}
				.conteSecciones{
					position: relative;
					width: 100%;
					height: 100%;
					display: flex;
					transition:0.8s;
					right: 0;
					top: 0;
				}
				.secciones{
					height: 100%;
					width: 100%;
					transition: 0.5s;
				}
				#funcionaporfa{
					height:1px;
				}

				</style>`);
		
		
}
