// Think about structure.


export const getModules = function() {
    const navLinkModules = {
        Informatics: {
            subItems: false,
            navLinks: ['BaseStats', 'Moves', 'Abilities', 'Role']
        },
        Statistics: {
            subItems: false,
            navLinks: ['TotalStats']
        },
    };

    return navLinkModules;
}