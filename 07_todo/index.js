document.querySelector('#adicionar-btn').onclick = function() {
    const tareaInput = document.querySelector('#nueva-tarea input');

    if (tareaInput.value.trim() === "") {
        alert("Ingrese una tarea!");
    } else {
        document.querySelector('#tareas').innerHTML += `
            <tr>
                <td>${tareaInput.value}</td>
                <td><button class="delete">Eliminar</button></td>
            </tr>
        `;

        tareaInput.value = "";

        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach(button => {
            button.onclick = function() {
                this.parentElement.parentElement.remove();
            };
        });
    }
};