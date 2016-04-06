describe('Given we are emitting an event',function(){
	var topEventSpy = jasmine.createSpy();
	var bottomEventSpy = jasmine.createSpy();

	beforeEach(function(){
		module('pubSub');
		inject(function($controller, $rootScope){
			var topScope =  $rootScope.$new();
			var middleScope =  topScope.$new();
			var bottomScope =  middleScope.$new();

			$controller('TopController',{$scope:topScope});
			$controller('MiddleController',{$scope:middleScope});
			$controller('BottomController',{$scope:bottomScope});

			topScope.$on('MIDDLEEMIT',topEventSpy);
			bottomScope.$on('MIDDLEEMIT',bottomEventSpy);

			middleScope.$emit('MIDDLEEMIT');
		});
	});

	afterEach(function(){
		topEventSpy.calls.reset();
		bottomEventSpy.calls.reset();
	})

	it('Should notify top controller',function(){
		expect(topEventSpy).toHaveBeenCalled();
	})

	it('Should not notify bottom controller', function(){
		expect(bottomEventSpy.calls.any()).toBe(false);
	})
})
