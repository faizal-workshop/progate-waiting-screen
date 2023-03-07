'use strict';

function alpineInit() {
    return {
        h1: 'Digital Talent Scholarship 2023',
        h2: 'Introduction to Frontend Development',
        h3: 'Fresh Graduate Academy Kelas B',
        mentor: 'Faizal Chan.',
        date: () => {
            const date = new Date();
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('id-ID', options);
        },
    }
}
