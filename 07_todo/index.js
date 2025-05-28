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

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker instalando...");
      } else if (registration.waiting) {
        console.log("Service worker instalado");
      } else if (registration.active) {
        console.log("Service worker activo");
      }
    } catch (error) {
      console.error(`Fallo en el registro: ${error}`);
    }
  }
};

registerServiceWorker();