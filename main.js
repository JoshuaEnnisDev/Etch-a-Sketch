let count = 0;

function createGrid(gridSize)
{
    body = document.querySelector('.main');

for (let i = 0; i < gridSize; i++)
{
    container = document.createElement('div');
    container.classList.add("container");
    body.appendChild(container);

    for (let j = 0; j < gridSize; j++)
    {
        let block = document.createElement('div');
        block.classList.add("clickable");
        container.appendChild(block);
    }
}
}

function setGridBtnListener()
{
    let grid = 0;
    gridBtn = document.querySelector(".gridBtn");

    gridBtn.addEventListener('click', () => {
        do
        {
            grid = prompt("Enter the size you want your grid to be. (Maximum 100)");
            clearGrid();
            
        }
        while (grid < 0 || grid > 100)
        createGrid(grid);
        setBlockListeners();
    });
}



function setBlockListeners()
{
    count++;
    console.log(count);
    let blocks = document.querySelectorAll('.clickable');
    let mouseDown = false;
    blocks.forEach(block => {block.addEventListener('mousedown', (e) => {
    
         mouseDown = true;
         block.classList.add('mousedown');
        });
    });

    blocks.forEach(block => {block.addEventListener('mouseup', (e) => {
    
        mouseDown = false;
        block.classList.remove('mousedown');
        });
    });
   
    blocks.forEach(block => {block.addEventListener('mouseover', (e) => {
    
            if (mouseDown == true)
            {
                
                block.classList.add('colorChanged');
            }
            
        });
    });
}

function clearGrid()
{
    containers = document.querySelectorAll(".container");

    containers.forEach(container => {

        container.remove();
    });

}

function setEraseBtn()
{

}


// runs the program.
createGrid(16);
setBlockListeners();
setGridBtnListener();



 




