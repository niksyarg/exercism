import java.math.BigInteger
import java.security.SecureRandom

object DiffieHellman {

    // Шаг 1: Генерация приватного ключа
    fun privateKey(prime: BigInteger): BigInteger {
        val random = SecureRandom()
        val upperLimit = prime.subtract(BigInteger.ONE) // p - 1
        var key: BigInteger
        
        // Приватный ключ должен быть строго > 1 и < p
        do {
            key = BigInteger(prime.bitLength(), random)
        } while (key <= BigInteger.ONE || key >= upperLimit)
        
        return key
    }

    // Шаг 2: Вычисление публичного ключа (A = g^a mod p)
    fun publicKey(p: BigInteger, g: BigInteger, privKey: BigInteger): BigInteger {
        return g.modPow(privKey, p)
    }

    // Шаг 3: Вычисление общего секретного ключа (s = B^a mod p)
    fun secret(prime: BigInteger, publicKey: BigInteger, privateKey: BigInteger): BigInteger {
        return publicKey.modPow(privateKey, prime)
    }
}
