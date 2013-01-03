var counter = 0;
var selectedFurniture;

function createFurniture(furniture_name, length, depth) {
	var room = document.getElementById('left-pane');
	

	var furniture = document.createElement('div');
	furniture.id = 'furniture'+counter;
	furniture.className = 'furnitureInRoom';
	furniture.style.width = length*2;
	furniture.style.height = depth*2;
	furniture.rotation = 0;
	furniture.onclick = function() {changeSelectedFurniture(this)};
	
	room.appendChild(furniture);
	
	if (selectedFurniture != undefined) {
		selectedFurniture.style.backgroundColor = '#FFFFFF';
	}
	selectedFurniture = furniture;
	
	
	new Draggable( furniture, {} );
	
	counter++;
	
}

function changeSelectedFurniture(element) {
	selectedFurniture.style.backgroundColor = '#FFFFFF';
	selectedFurniture = element;
	selectedFurniture.style.backgroundColor = '#CCCCCC';
}

function deleteFurniture() {
	selectedFurniture.parentNode.removeChild(selectedFurniture);
	selectedFurniture = undefined;
}

function rotateFurnitureLeft() {
	
	if (selectedFurniture.rotation == 0) {
		selectedFurniture.rotation = 360;
	}
    selectedFurniture.rotation = selectedFurniture.rotation-45;
    
   	selectedFurniture.style.webkitTransform='rotate('+ selectedFurniture.rotation+'deg)';
	
}

function rotateFurnitureRight() {
if (selectedFurniture.rotation == 360) {
		selectedFurniture.rotation = 0;
	}
    selectedFurniture.rotation = selectedFurniture.rotation+45;
    
   	selectedFurniture.style.webkitTransform='rotate('+ selectedFurniture.rotation+'deg)';

}

