describe('userFilter', function () {
    var usersFilter, result;
    var users = [
        { id: '1', title: 'abc' },
        { id: '4', title: 'ddd' },
        { id: '2', title: 'bcd' },
    ];
    beforeEach(function () {
        module('demo.filters');
        inject(function ($filter) {
            usersFilter = $filter('usersFilter');;
        });
    });

    describe('search users', function () {
        it('should have expected all users on search by blank', function () {
            result = usersFilter(users, '', ['id', 'title']);
            expect(result.length).to.equal(3);
        });

        it('should have expected number of users on search by id', function () {
            result = usersFilter(users, '4', ['id', 'title']);
            expect(result.length).to.equal(1);
        });

        it('should have expected number of users on search by partial title', function () {
            result = usersFilter(users, 'bc', ['id', 'title']);
            expect(result.length).to.equal(2);
        });

        it('should have expected number of users on search by exact title', function () {
            result = usersFilter(users, 'ddd', ['id', 'title']);
            expect(result.length).to.equal(1);
        });
    });
});