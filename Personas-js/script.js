let personas = [];

function registrarPersonas() {
    const numPersonas = parseInt(prompt("Ingrese el número de personas a registrar:"));
    for (let i = 0; i < numPersonas; i++) {
        const nombre = prompt(`Persona ${i + 1}: Nombre`);
        const edad = parseInt(prompt(`Persona ${i + 1}: Edad`));
        const nota = parseFloat(prompt(`Persona ${i + 1}: Nota`));
        personas.push([nombre, edad, nota]);
    }
    mostrarResultados();
}

function mostrarResultados() {
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h2>Datos Ingresados:</h2>";
    personas.forEach(persona => {
        resultadosDiv.innerHTML += `<p>${persona[0]}, ${persona[1]} años, Nota: ${persona[2]}</p>`;
    });

    const personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);
    resultadosDiv.innerHTML += "<h2>Datos Ordenados por Nota:</h2>";
    personasOrdenadas.forEach(persona => {
        resultadosDiv.innerHTML += `<p>${persona[0]}, ${persona[1]} años, Nota: ${persona[2]}</p>`;
    });
}