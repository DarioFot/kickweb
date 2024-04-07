document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.getElementById('arrow');
    
    document.addEventListener('mousemove', function(e) {
        var x = e.clientX - arrow.getBoundingClientRect().left;
        var y = e.clientY - arrow.getBoundingClientRect().top;
        var deg = Math.atan2(y, x) * (180 / Math.PI);
        arrow.style.transform = 'rotate(' + deg + 'deg)';
    });
});
    