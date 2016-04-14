describe('',function(){
	beforeEach(function(){
		browser.get('/');
		var commentInput = $('input');
		commentInput.sendKeys("a comment");

		var submitButton = element(by.buttonText('Submit')).click();
	});
	it('Should then add the comment',function(){
		var comments = element.all(by.repeater('comment in comments')).first();
		expect(comments.getText()).toBe('a comment like 0');
	})
	describe('When I like a comment',function(){
		var firstComment = null;

		beforeEach(function(){
			firstComment = element.all(by.repeater('comment in comments')).first();
			var likeButton = firstComment.element(by.buttonText('like'));
			likeButton.click();
		})

		it('Should increase the number of likes to one',function(){
			var commentLikes = firstComment.element(by.binding('comment.likes'));
			expect(commentLikes.getText()).toBe('1');
		})
	})



});

// describe('',function(){
// 	beforeEach(function(){
// 		// var mockController = function(){
// 		// 	angular.module('comments',[])
// 		// 			.controller('CommentController',['$scope',function($scope){
// 		// 				$scope.comments = ['comment1','comment2'];
// 		// 			}]);
// 		// };
// 		// browser.addMockModule('comments',mockController);
// 		browser.get('/index.html');
// 		// browser.pause();
// 	});

// 	it('',function(done){
// 		var comments = element.all(by.repeater('comment in comments'));
// 		expect(true).toBe(true);
// 	});
// });