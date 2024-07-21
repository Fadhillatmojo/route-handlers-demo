export const dynamic = "force-dynamic"; // the default is auto

export async function GET() {
	return Response.json({
		// di dalam GET function di next, secara otomatis, ini tercaching, jadi kita harus beritahu bagian mana yg gausah di caching
		time: new Date().toLocaleTimeString()
	});
}