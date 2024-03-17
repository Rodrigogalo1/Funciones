let colorGlobal;

document.querySelectorAll('.cuadro').forEach((cuadro) => {
	cuadro.addEventListener('click', function (event) {
		const element = event.target;
		element.style.backgroundColor = 'black';
	});
});

document.addEventListener('keydown', function (event) {
	const tecla = event.key;
	saveColor(tecla);
});

document.addEventListener('keydown', function (event) {
	const tecla = event.key;
	saveColor(tecla);
    });

    const saveColor = (tecla) => {
        const teclaVerificada = tecla.toLowerCase();

         if(teclaVerificada === 'a') {
             colorGlobal = 'pink';
             changeBg(colorGlobal);
         } else if (teclaVerificada === 's') {
             colorGlobal = 'orange';
             changeBg(colorGlobal);
         } else if (teclaVerificada === 'd') {
             colorGlobal = 'cyan';
             changeBg(colorGlobal);
         }

        switch (teclaVerificada) {
       
		case 'q':
			colorGlobal = 'purple';
			crearCuadro();
			break;
		case 'w':
			colorGlobal = 'gray';
			crearCuadro();
			break;

		case 'e':
			colorGlobal = 'brown';
			crearCuadro();
			break;
		default:
			break;
	   }
    };

const changeBg = (color) => {
	const element = document.getElementById('key');
	element.style.backgroundColor = color;
};

const changeBgNew = (color, element) => {
	element.style.backgroundColor = color;
};

const crearCuadro = () => {
	const existElement = document.getElementById('keyfantasma');
	console.log('Cuadro function');
	if (existElement) {
		changeBgNew(colorGlobal, existElement);
	} else {
		const newDiv = document.createElement('div');
		newDiv.id = 'keyfantasma';
		newDiv.style.height = '200px';
		newDiv.style.width = '200px';
		newDiv.style.border = '2px solid black';
		newDiv.className = 'cuadro';

		document.querySelector('body').appendChild(newDiv);
		changeBgNew(colorGlobal, newDiv);
	}
};

