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
      function clearDisplay() {
  document.getElementById('calcDisplay').value = '';
}
  
    
    const display = document.getElementById('calcDisplay');
    const buttons = document.querySelectorAll('.calc-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const val = button.textContent;
       if (val === '=') {
          try {
            display.value = eval(display.value);
          } catch {
            display.value = 'Ошибка';
          }
        } else if (val === 'C') {
          display.value = '';
        } else {
          display.value += val;
        }
      });
    });
  
    
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
  
    
    const footerButtons = document.querySelectorAll('.footer-buttons button');
    footerButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = document.getElementById(button.getAttribute('onclick').match(/'(.*)'/)[1]);
        target.classList.toggle('active');
      });
    });
  });
