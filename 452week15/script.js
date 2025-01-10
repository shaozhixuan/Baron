// 获取 DOM 元素
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 添加任务函数
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('请输入任务内容！');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-btn">Remove</button>
        <button class="complete-btn">Complete</button>
    `;

    const removeBtn = li.querySelector('.remove-btn');
    const completeBtn = li.querySelector('.complete-btn');

    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    newTaskInput.value = '';
}

// 监听添加任务按钮的点击事件
addTaskBtn.addEventListener('click', addTask);

// 监听回车键，按下回车键时也添加任务
newTaskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});