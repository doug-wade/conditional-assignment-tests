import test from 'ava';

test("conditional assignment behaves like multiple assignment", t => {
	let foo;
        let bar = foo = 'val';
	let baz;
	let quux = baz ||= 'val';
	t.is(bar, quux); 
})

test("conditional assignment does not reassign strings", t => {
	let foo = 'foo';
	foo ||= 'bar';
	t.is(foo, 'foo');
})

test("conditional assignment does not reassign objects", t => {
	let foo = { foo: 'foo'};
	foo ||= 'bar';
	t.same(foo, { foo: 'foo'});
})

test("conditional assignment does not reassign non-zero numeric values", t => {
	let foo = 42;
	foo ||= 120;
	t.is(foo, 42);
})

test("conditional assignment does not reassign arrays", t => {
	let foo = [42];
	foo ||= "foo";
	t.same(foo, [42]);
})

test("conditional assignment reassigns undefined variables", t => {
	let foo;
	foo ||= 'foo';
	t.is(foo, 'foo');
})


test("conditional assignment reassigns null variables", t => {
	let foo = null;
	foo ||= 'foo';
	t.is(foo, 'foo');
})

test("conditional assignment reassigns empty string variables", t => {
	let foo = "";
	foo ||= 'foo';
	t.is(foo, 'foo');
})

test("conditional assignment reassigns numeric variables that are 0", t => {
	let foo = 0;
	foo ||= 'foo';
	t.is(foo, 'foo');
})
