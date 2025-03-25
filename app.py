from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Lista para almacenar los datos de las personas
personas = []

@app.route('/', methods=['GET', 'POST'])
def home():
    global personas
    if request.method == 'POST':
        # Obtener el número de personas
        num_personas = int(request.form['num_personas'])
        
        # Limpiar la lista de personas antes de agregar nuevas
        personas.clear()
        
        # Obtener los datos de cada persona
        for i in range(num_personas):
            nombre = request.form[f'nombre_{i}']
            edad = int(request.form[f'edad_{i}'])
            nota = float(request.form[f'nota_{i}'])
            personas.append([nombre, edad, nota])
        
        # Redirigir para mostrar los resultados
        return redirect(url_for('resultados'))
    
    return render_template('index.html')

@app.route('/resultados')
def resultados():
    # Ordenar a las personas por la nota en orden descendente
    personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)
    return render_template('resultados.html', personas=personas, personas_ordenadas=personas_ordenadas)

if __name__ == '__main__':
    app.run(debug=True)
