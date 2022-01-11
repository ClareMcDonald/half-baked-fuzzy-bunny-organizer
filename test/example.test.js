// IMPORT MODULES under test here:
import { renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('renderBunny should return a DOM element containing bunnyEl', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const bunny = {
        name: 'Marcy'
    };

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny(bunny);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected.outerHTML);
});
