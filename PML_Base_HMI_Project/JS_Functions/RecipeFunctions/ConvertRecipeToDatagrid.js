﻿// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {

    var ConvertRecipeToDataGrid = function ConvertRecipeToDataGrid(ctx, recipeReference) {
        if (!recipeReference) {
            // Stop (not abort) with null (binding without a value) or empty string
            ctx.success(null);  // setting null, as the setter of the datagrid must be called with the default
            
            return;    // We are running async so the return value is not used
        }

        // Call server to fetch recipe
        TcHmi.Server.RecipeManagement.getRecipe(recipeReference, null, function (data) {
            if (data.error) {
                // Inform the system that we are done but had an error
                ctx.error(data.error, {
                    code: data.error,
                    message: TcHmi.Errors[data.error],
                    reason: 'Function: ConvertRecipeToDataGrid, Recipe ' + recipeReference + ' fetching failed',
                    domain: 'Function',
                    errors: (data.details ? [data.details] : undefined)
                });
                
                return;    // We are running async so the return value is not used
            } else {
                // Check if the format of the recipe is known
                if (!data.value || !data.value.values) {
                    // Inform the system that we are done but had an error
                    ctx.error(TcHmi.Errors.E_PARAMETER_INVALID, {
                        code: TcHmi.Errors.E_PARAMETER_INVALID,
                        message: TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],
                        reason: 'Function: ConvertRecipeToDataGrid, Recipe ' + recipeReference + ' had wrong data format',
                        domain: 'Function'
                    });
                    
                    return;    // We are running async so the return value is not used
                }
                // Build up an array for the datagrid data (must match the SrcColumn of the datagrid)
                var result = [];
                for (var memberName in data.value.values) {
                    result.push({
                        memberName: memberName,
                        value: data.value.values[memberName],
                        newValue: data.value.values[memberName]
                    });
                }
                // Inform the system that we are done and have a result
                ctx.success(result);
                
                return;    // We are running async so the return value is not used
            }
        });
        
        return;    // We are running async so the return value is not used
    };
    
    TcHmi.Functions.registerFunction('ConvertRecipeToDataGrid', ConvertRecipeToDataGrid);
})(TcHmi);
