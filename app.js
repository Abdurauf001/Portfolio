const skills = {
    html:  { name: "HTML",       pct: 90, },
    css:   { name: "CSS",        pct: 80, },
    js:    { name: "JavaScript", pct: 65, },
    react: { name: "React",      pct: 80, },
    node:  { name: "Node.js",    pct: 75, }
};

function showSkill(key) {
    var area = document.getElementById('progress-area');
    var btn = event.target;

    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        area.innerHTML = '<div style="font-size:15px; color:#64748b;"></div>';
        return;
    }

    document.querySelectorAll('.skill-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    var s = skills[key];

    area.innerHTML =
        '<div class="progress-wrap">' +
            '<div class="progress-label">' +
                '<span class="progress-name">' + s.name + '</span>' +
                '<span class="progress-level">' + s.pct + '%</span>' +
            '</div>' +
            '<div class="progress-track">' +
                '<div class="progress-fill" id="fill"></div>' +
            '</div>' +
            '<div class="progress-desc"></div>' +
        '</div>';

    setTimeout(function() {
        document.getElementById('fill').style.width = s.pct + '%';
    }, 30);
}