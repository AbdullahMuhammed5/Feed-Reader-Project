/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL', function(){
            allFeeds.forEach((item) => {
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBeNull();
             });
         });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has Name', function(){
            allFeeds.forEach((item) => {
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBeNull();
             });
         });
    });


    /* This suite test Menu functionalities */
    
    describe('The menu', function(){

        /* This test that ensures the menu element is
         * hidden by default.
         */
        it('hidden elements', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         /* This test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('change visibility of elemenet when click', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This suite ensures that entries are have been initialized  */
    
    describe('Initial Entries', function(){
        
        beforeEach(function (done){
            loadFeed(0, function(){
                done();
            });
        });

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single " .entry " element within the " .feed " container.
         */
        
        it('when loadFeed called', function(){
            expect('.feed .entry').toBeDefined();
        });
    });

    /* This suite test whather New Feed Selection working fine and content are changed OR not  */
    
    describe('New Feed Selection', function(){
        
        // Initial loaded feed setup
        var oldFeed;
        
        beforeEach(function(done) {
          loadFeed(0, function() {
            oldFeed = document.querySelector(".feed").innerHTML;

            loadFeed(1, function() {
              done();
            });
          });
        });
        
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('when news feed is loaded', function(done){
            var newFeed = document.querySelector(".feed").innerHTML;
            expect(oldFeed).not.toEqual(newFeed);
            done();
        });
        
    });
}());


