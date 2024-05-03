
document.addEventListener('DOMContentLoaded', function() {
  const copyPromptButton = document.getElementById('copy-prompt');
  const backToFormButton = document.getElementById('back-to-form');
  const promptForm = document.getElementById('prompt-form');
  const mainForm = document.getElementById('main-form');

  copyPromptButton.addEventListener('click', function() {
    const nivelname = document.getElementById('nivel').value;
    const gradoname = document.getElementById('grado').value;
    const competencianame = document.getElementById('competency').value;
    const capacidadname = document.getElementById('capability').value;
    const performancename =  document.getElementById('performance').value;
    const purposename = document.getElementById('purpose').value;
    const temaname = document.getElementById('tema').value;
    const evidencianame = document.getElementById('evidencia').value;
    const instrumentoname = document.getElementById('instrumento').value;
    const duracionname = document.getElementById('duracion').value;
    
    const promptText = 'Actua como un experto en educación y sesiones de aprendizaje. ELABORA UNA SESION DE APRENDIZAJE para Estudiantes que residen en el distrito de Magdalena del Mar de la provincia de Lima en el departamento de Lima en Perú. \n' +

'Es necesario que la sesión de aprendizaje esté organizado en 3 momentos de aprendizaje y que a su vez incluyen actividades de aprendizaje organizadas en viñetas: \n'+
			'- En el MOMENTO INICIO debes plantear actividades redactadas en un tono neutro o impersonal y según este esquema de redacción: MOTIVACIÓN, SABERES PREVIOS, CONFLICTO COGNITIVOS, PROPOSITO DE LA ACTIVIDAD y RECURSOS EDUCATIVOS no olvides enumerarlos como anexos. No enumeres las actividades y quita los títulos del esquema.  \n'+
			'- En el MOMENTO PROCESO debes plantear actividades redactadas en un tono neutro o impersonal  y según este esquema de redacción: La gestión y acompañamiento del desarrollo de las competencias, las mismas que se relacionan con la secuencia didáctica, la descripción de la actividad se debe dar en forma alternada: PRESENTACION INTERACTIVA, DEMOSTRACION GUIADA, PRACTICA GUIADA, EVALUACION FORMATIVA, RECURSOS EDUCATIVOS [fichas prácticas, lecturas u otros recursos educativos innovadores] no olvides enumerarlos como anexos. No enumeres las actividades y quita los títulos del esquema. \n'+
			'- En el MOMENTO CIERRE debes plantear actividades redactadas en un tono neutro o impersonal y según este esquema de redacción: TRANSFERENCIA DEL APRENDIZAJE, METACOGNICION [plantear 3 preguntas de metacognición sobre el tema y deja una tarea para la casa], RETROALIMENTACION INDIVIDUALIZADA, AUTOEVALUACION y RECURSOS EDUCATIVOS [Haz una lista de los anexos utilizados en los momentos de la sesión de aprendizaje]. No enumeres las actividades y quita los títulos del esquema. \n' +
'Teniendo en cuenta la siguiente información:' + '\n' +
			'GRADO: '+ gradoname + ' de '+ nivelname + '\n'+
			'COMPETENCIA: '+ competencianame + '\n'+
			'CAPADIDAD: '+ capacidadname + '\n'+
                        'DESEMPEÑO PRECISADO: '+ performancename + '\n'+
			'PROPOSITO DE LA SESION: '+ purposename + '\n'+
			'CAMPO TEMATICO: '+ temaname + '\n'+
			'EVIDENCIA: '+ evidencianame + '\n'+
			'INSTRUMENTO: '+ instrumentoname  + '\n'+
			'DURACION: '+ duracionname + '\n'; 
    
    document.getElementById('prompt-text').value = promptText;
    navigator.clipboard.writeText(promptText)
      .then(() => {
        alert('¡Texto copiado al portapapeles!');
        clearFormFields();
      })
      .catch(err => console.error('Error al copiar al portapapeles: ', err));
    promptForm.style.display = 'block';
    mainForm.style.display = 'none';
  });

  backToFormButton.addEventListener('click', function() {
    promptForm.style.display = 'none';
    mainForm.style.display = 'block';
  });

  function clearFormFields() {
    const fields = document.querySelectorAll('input[type=text], textarea');
    fields.forEach(field => {
      field.value = '';
    });
  }
});
