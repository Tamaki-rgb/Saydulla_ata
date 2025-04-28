function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.getElementById('calcBtn');
  const todoBtn = document.getElementById('todoBtn');
  const calcPopup = document.getElementById('calcPopup');
  const todoPopup = document.getElementById('todoPopup');

  calcBtn.addEventListener('click', () => {
    calcPopup.style.display = 'block';
  });

  todoBtn.addEventListener('click', () => {
    todoPopup.style.display = 'block';
  });

 // Функция для очистки дисплея
function clearDisplay() {
  const display = document.getElementById('calcDisplay');
  display.value = '';
}

// Функция для добавления символов на дисплей
function appendToDisplay(value) {
  const display = document.getElementById('calcDisplay');
  display.value += value;
}

// Функция для расчёта результата
function calculateResult() {
  const display = document.getElementById('calcDisplay');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Ошибка';
  }
}

// Навешиваем обработчики на кнопки
document.querySelectorAll('.calc-btn').forEach(button => {
  const val = button.textContent;

  if (val === 'AC') {
    button.addEventListener('click', clearDisplay); // ✅ Теперь вызываем именно функцию clearDisplay
  } else if (val === '=') {
    button.addEventListener('click', calculateResult);
  } else {
    button.addEventListener('click', () => appendToDisplay(val));
  }
});

  // Работа списка задач
  const taskInput = document.getElementById('newTask');
  const taskList = document.getElementById('taskList');

  window.addTask = () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    span.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '×';
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);

    taskList.appendChild(li);
    taskInput.value = '';
  };

  // Работа кнопок футера
  const footerButtons = document.querySelectorAll('.footer-buttons button');
  footerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.getAttribute('onclick').match(/'(.*)'/)[1]);
      target.classList.toggle('active');
    });
  });
});
