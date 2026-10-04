
function mostrarFormulario(figura) {

    // Ocultar formularios
    document.getElementById("form-cuadrado").style.display = "none";
    document.getElementById("form-rectangulo").style.display = "none";
    document.getElementById("form-triangulo").style.display = "none";
    document.getElementById("form-circulo").style.display = "none";
    document.getElementById("form-trapecio").style.display = "none";

    // Mostrar formulario seleccionado
    if (figura === "cuadrado") {
        document.getElementById("form-cuadrado").style.display = "block";
    }
    else if (figura === "rectangulo") {
        document.getElementById("form-rectangulo").style.display = "block";
    }
    else if (figura === "triangulo") {
        document.getElementById("form-triangulo").style.display = "block";
    }
    else if (figura === "circulo") {
        document.getElementById("form-circulo").style.display = "block";
    }
    else if (figura === "trapecio") {
        document.getElementById("form-trapecio").style.display = "block";
    }

    // Borra el resultado anterior
    document.getElementById("resultado").innerHTML = "";
}


function calcularArea(tipo, base, altura) {

    let area;

    if (tipo === "cuadrado") {
        area = base * base;
    }
    else if (tipo === "rectangulo") {
        area = base * altura;
    }
    else if (tipo === "triangulo") {
        area = (base * altura) / 2;
    }
    else if (tipo === "circulo") {
        area = Math.PI * base * base;
    }

    return area;
}


// Calcular área del cuadrado

function calcularAreaCuadrado() {

    const lado = Number(document.getElementById("lado").value);

    if (lado <= 0) {
        document.getElementById("resultado").innerHTML =
            "Introduce un lado mayor que cero.";
        return;
    }

    const area = calcularArea("cuadrado", lado, lado);

    document.getElementById("resultado").innerHTML =
        "El área del cuadrado es: " + area;
}


// Calcular área del rectángulo

function calcularAreaRectangulo() {

    const base = Number(document.getElementById("baseRectangulo").value);
    const altura = Number(document.getElementById("alturaRectangulo").value);

    if (base <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Introduce valores mayores que cero.";
        return;
    }

    const area = calcularArea("rectangulo", base, altura);

    document.getElementById("resultado").innerHTML =
        "El área del rectángulo es: " + area;
}


// Calcular área del triángulo

function calcularAreaTriangulo() {

    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);

    if (base <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Introduce valores mayores que cero.";
        return;
    }

    const area = calcularArea("triangulo", base, altura);

    document.getElementById("resultado").innerHTML =
        "El área del triángulo es: " + area;
}


// Calcular área del círculo

function calcularAreaCirculo() {

    const radio = Number(document.getElementById("radio").value);

    if (radio <= 0) {
        document.getElementById("resultado").innerHTML =
            "Introduce un radio mayor que cero.";
        return;
    }

    const area = calcularArea("circulo", radio, radio);

    document.getElementById("resultado").innerHTML =
        "El área del círculo es: " + area.toFixed(2);
}


// Calcular área del trapecio

function calcularAreaTrapecio() {

    const baseMayor = Number(document.getElementById("baseMayor").value);
    const baseMenor = Number(document.getElementById("baseMenor").value);
    const altura = Number(document.getElementById("alturaTrapecio").value);

    if (baseMayor <= 0 || baseMenor <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Introduce valores mayores que cero.";
        return;
    }

    const area = ((baseMayor + baseMenor) * altura) / 2;

    document.getElementById("resultado").innerHTML =
        "El área del trapecio es: " + area.toFixed(2);
}