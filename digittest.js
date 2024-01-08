function drawSegments() {
    let containers = Array.from(document.querySelectorAll('.vertical-segment-test'));
    containers.forEach((container) => {
        
            let upperPoint = document.createElement('div');
            upperPoint.classList.add('pointer-up');
            let segment = document.createElement('div');
            segment.classList.add('vertical-segment');
            let lowerPoint = document.createElement('div');
            lowerPoint.classList.add('pointer-down');
            container.appendChild(upperPoint);
            container.appendChild(segment);
            container.appendChild(lowerPoint);
        }
);

    containers = Array.from(document.querySelectorAll('.horizontal-segment-test'));
    containers.forEach((container) => {
        let leftPoint = document.createElement('div');
        leftPoint.classList.add('pointer-left');
        let segment = document.createElement('div');
        segment.classList.add('horizontal-segment');
        let rightPoint = document.createElement('div');
        rightPoint.classList.add('pointer-right');
        
        container.appendChild(leftPoint);
        container.appendChild(segment);
        container.appendChild(rightPoint);
    });
}


drawSegments();