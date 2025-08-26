'use strict';

const createTemplateValidator = require('q-template-validator');
const generatedObject = require('../dist/template');

describe('build template', () => {
    it('should validate against the compiled document', () => {
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: generatedObject
        });
        const valid = qTemplateValidator.isValidCompiledDocument(['examples', 'invalidExamples']);

        expect(valid).toEqual(true);
    });
});
