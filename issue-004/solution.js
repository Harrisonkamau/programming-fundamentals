function grade(a) {
    // assumption, all marks are btn 0 and 100
    if (a >= 80) {
        return 'A';
    } else if (a >= 60) {
        return 'B';
    } else if (a >= 50) {
        return 'C';
    } else if (a >= 40) {
        return 'D';
    } else if (a >= 30) {
        return 'E';
    } else {
        return 'F';
    }
}