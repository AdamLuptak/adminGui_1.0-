adminGui.controller('TaskController', ['$scope', function($scope){
	
	/*$scope.tasks = [
	                {
	                	ID: 1,
	                	Name: 'Creation of an organizational unit',                		
	                	Description: 'Execute the transaction ‘Organizational and Staffing Change’ and create an organizational unit' +
	                				 'which reports to the organizational unit ‘T-systems Slovakia_Testing (ID 50006127).' +
	                				  'That means T-systems Slovakia_Testing (ID 50006127) should be the line supervisor of the new' + 
	                				  'created organizational unit.',
	                	Details: '-	Name of the organizational unit: Development_YY_X' +
	                			 '- Short name: DevelX' +
	                		     '-	Valid from 01.01.2015 till 31.12.9999'			  

	                },
	                {
	                	ID:2,
	                	Name: 'Creation of a position',
	                	Description: 'Create a position ‘TesterX’ for the new created organizational unit ‘T-systems Slovakia_TestingX with:',
	                	Details: '-	Short text: TesterX'+
	                			 '- Name: TestingX’'+
	                			 '- Valid from 01.10.2015 to 31.12.9999'+
	                			 '-	Job: MR01 Market Research'
	                }
	                ]	*/
	$scope.tasks = {
			 repeatSelect: null,
			 
			    availableOptions: [
			                       {
			   	                	ID: 1,
			   	                	Name: 'Creation of an organizational unit',                		
			   	                	Description: 'Execute the transaction "Organizational and Staffing Change" and create an organizational unit | dsd' +
			   	                				 ' which reports to the organizational unit T-systems Slovakia_Testing (ID 50006127).' +
			   	                				  'That means T-systems Slovakia_Testing (ID 50006127) should be the line supervisor of the new' + 
			   	                				  ' created organizational unit.' +
			   	                				  ' ',
			   	                	Details: '-	Name of the organizational unit: Development_YY_X' + 
			   	                			 '- Short name: DevelX' +
			   	                		     '-	Valid from 01.01.2015 till 31.12.9999',			  

			   	                },
			   	                {
			   	                	ID:2,
			   	                	Name: 'Creation of a position',
			   	                	Description: 'Create a position "TesterX" for the new created organizational unit "T-systems Slovakia_TestingX" with:',
			   	                	Details: '-	Short text: TesterX'+
			   	                			 '- Name: TestingX'+
			   	                			 '- Valid from 01.10.2015 to 31.12.9999'+
			   	                			 '-	Job: MR01 Market Research'
			   	                }
			      ],
//			      repeatSelect2: null,
//				availableOptions2: [
//				                    {
//						Details: '-	Name of the organizational unit: Development_YY_X' +
//						'- Short name: DevelX' +
//						'-	Valid from 01.01.2015 till 31.12.9999'			 
//					
//				}
//				                    ]
	};
	
//	it('should check ng-options', function(){
//		expect(element(by.binding('{selected_task:repeatSelect}')).getText()).toMatch('-	Short text: TesterX'+
//      			 '- Name: TestingX'+
//       			 '- Valid from 01.10.2015 to 31.12.9999'+
//       			 '-	Job: MR01 Market Research');
//		element.all(by.model('tasks.repeatSelect2')).first().click();
//	});
	
	
}]); 
