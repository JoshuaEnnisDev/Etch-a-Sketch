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
    let blocks = document.querySelectorAll('.clickable');

    blocks.forEach(block => {block.addEventListener('mouseover', (e) => {
        if(e.buttons === 1)
            block.classList.add('colorChanged');
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

// runs the program.
createGrid(16);
setBlockListeners();
setGridBtnListener();



 




